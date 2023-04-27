import React, {useCallback, useEffect, useState} from 'react';

function dateParser(date) {
  const parsed = new Date(date);
  if (!Number.isNaN(parsed.valueOf())) {
    return parsed;
  }

  const parts = (date + '').match(/\d+/g);
  if (parts == null || parts.length <= 2) {
    return parsed;
  } else {
    const [firstP, secondP, ...restPs] = parts.map((x) => parseInt(x));
    const correctedParts = [firstP, secondP - 1, ...restPs];
    const isoDate = new Date(Date.UTC(...correctedParts));
    return isoDate;
  }
}
function defaultFormatter(
  value,
  _unit,
  suffix,
) {
  const unit = value !== 1 ? _unit + 's' : _unit;

  return value + ' ' + unit + ' ' + suffix;
}

// If the numbers array is present, format numbers with it,
// otherwise just cast the number to a string and return it
const normalizeNumber = (numbers, value) =>
  numbers && numbers.length === 10
    ? String(value)
      .split('')
      .map((digit) =>
        digit.match(/^[0-9]$/)
          ? ((numbers))[parseInt(digit)]
          : digit,
      )
      .join('')
    : String(value);

// Take a string or a function that takes number of days and returns a string
// and provide a uniform API to create string parts
const normalizeFn =
  (value, distanceMillis, numbers) =>
    (stringOrFn) =>
      typeof stringOrFn === 'function'
        ? stringOrFn(value, distanceMillis).replace(
          /%d/g,
          normalizeNumber(numbers, value),
        )
        : stringOrFn.replace(/%d/g, normalizeNumber(numbers, value));

function buildFormatter(strings) {
  return function formatter(
    _value,
    _unit,
    suffix,
    epochMilliseconds,
    _nextFormmater,
    now,
  ) {
    const current = now();
    let value = _value;
    let unit = _unit;
    // convert weeks to days if strings don't handle weeks
    if (unit === 'week' && !strings.week && !strings.weeks) {
      const days = Math.round(
        Math.abs(epochMilliseconds - current) / (1000 * 60 * 60 * 24),
      );
      value = days;
      unit = 'day';
    }

    // create a normalize function for given value
    const normalize = normalizeFn(
      value,
      current - epochMilliseconds,
      strings.numbers != null ? strings.numbers : undefined,
    );

    // The eventual return value stored in an array so that the wordSeparator can be used
    const dateString = [];

    // handle prefixes
    if (suffix === 'ago' && strings.prefixAgo) {
      dateString.push(normalize(strings.prefixAgo));
    }
    if (suffix === 'from now' && strings.prefixFromNow) {
      dateString.push(normalize(strings.prefixFromNow));
    }

    // Handle Main number and unit
    const isPlural = value > 1;
    if (isPlural) {
      const stringFn =
        strings[unit + 's'] || strings[unit] || '%d ' + unit;
      dateString.push(normalize(stringFn));
    } else {
      const stringFn =
        strings[unit] || strings[unit + 's'] || '%d ' + unit;
      dateString.push(normalize(stringFn));
    }

    // Handle Suffixes
    if (suffix === 'ago' && strings.suffixAgo) {
      dateString.push(normalize(strings.suffixAgo));
    }
    if (suffix === 'from now' && strings.suffixFromNow) {
      dateString.push(normalize(strings.suffixFromNow));
    }

    // join the array into a string and return it
    const wordSeparator =
      typeof strings.wordSeparator === 'string' ? strings.wordSeparator : ' ';
    return dateString.join(wordSeparator);
  };
}

const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
const YEAR = DAY * 365;
function useUpdate() {
  // eslint-disable-next-line no-unused-vars
  const [_, setCount] = useState(0);
  return useCallback(() => {
    setCount((num) => num + 1);
  }, []);
}
function TimeAgoComponent({
  date,
  formatter = defaultFormatter,
  live = true,
  minPeriod = 0,
  maxPeriod = WEEK,
  title,
  now = () => Date.now(),
  ...passDownProps
}) {
  const forceUpdate = useUpdate();
  useEffect(() => {
    if (!live) {
      return;
    }
    let timeoutId;
    const tick = (refresh) => {
      const then = dateParser(date).valueOf();
      if (!then) {
        return;
      }
      const timeNow = now();
      const seconds = Math.round(Math.abs(timeNow - then) / 1000);

      const unboundPeriod =
        seconds < MINUTE
          ? 1000
          : seconds < HOUR
            ? 1000 * MINUTE
            : seconds < DAY
              ? 1000 * HOUR
              : 1000 * WEEK;

      const period = Math.min(
        Math.max(unboundPeriod, minPeriod * 1000),
        maxPeriod * 1000,
      );

      if (period) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(tick, period);
      }
      if (!refresh) {
        forceUpdate();
      }
    };
    tick(true);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [date, forceUpdate, live, maxPeriod, minPeriod, now]);

  const then = dateParser(date).valueOf();
  if (!then) {
    return null;
  }

  const timeNow = now();
  const seconds = Math.round(Math.abs(timeNow - then) / 1000);
  const suffix = then < timeNow ? 'ago' : 'from now';

  const [value, unit] =
    seconds < MINUTE
      ? [Math.round(seconds), 'second']
      : seconds < HOUR
        ? [Math.round(seconds / MINUTE), 'minute']
        : seconds < DAY
          ? [Math.round(seconds / HOUR), 'hour']
          : seconds < WEEK
            ? [Math.round(seconds / DAY), 'day']
            : seconds < MONTH
              ? [Math.round(seconds / WEEK), 'week']
              : seconds < YEAR
                ? [Math.round(seconds / MONTH), 'month']
                : [Math.round(seconds / YEAR), 'year'];

  const passDownTitle =
    typeof title === 'undefined'
      ? typeof date === 'string'
        ? date
        : dateParser(date).toISOString().substr(0, 16).replace('T', ' ')
      : title;

  const spreadProps = {...passDownProps, dateTime: dateParser(date).toISOString()};

  const nextFormatter = defaultFormatter.bind(null, value, unit, suffix);

  return (
    <span {...spreadProps} title={passDownTitle}>
      {formatter(value, unit, suffix, then, nextFormatter, now)}
    </span>
  );
}

const formatter = buildFormatter({
  prefixAgo: 'Cách đây',
  prefixFromNow: null,
  suffixAgo: null,
  suffixFromNow: 'sau',
  seconds: 'chưa đến 1 phút',
  minute: 'khoảng 1 phút',
  minutes: '%d phút',
  hour: 'khoảng 1 tiếng',
  hours: 'khoảng %d tiếng',
  day: '1 ngày',
  days: '%d ngày',
  month: 'khoảng 1 tháng',
  months: '%d tháng',
  year: 'khoảng 1 năm',
  years: '%d năm',
  wordSeparator: ' '
});
export const TimeAgo = ({date, className}) => {
  if (!date) return null;
  return <TimeAgoComponent date={date} formatter={formatter} className={className} />;
};
