import {HTML_Safe} from 'utils/HTML_Safe';

export function ContentViewer({html,
  className, ...other}) {
  return <div dangerouslySetInnerHTML={{
    __html: HTML_Safe(html)
  }} className={className} {...other} />;
}