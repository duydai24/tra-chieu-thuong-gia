import {Editor} from '@tinymce/tinymce-react';
import {getRealImageUrl} from 'core/getRealImageUrl';
import {uploadFile} from 'core/uploadFile';
import Button from 'lib/Button';
import ToastRoot from 'lib/ToastRoot';
import {useState} from 'react';

import {ContentViewer} from './ContentViewer';

function ContentEditor({value, onChange, label, id, name, className, extra, classNameEditor, onCloseEit}) {
  const [_changed, setChanged] = useState('');
  const [showView, setShowView] = useState(false);
  const [q, setQ] = useState(false);
  const onsetShowpreview = () => {
    setShowView(!showView);
  };
  const toggleQuestion = () => {
    setQ((q) => !q);
  };

  const onSave = () => {
    toggleQuestion();
    if (!onChange) return;

    if (value !== _changed) {
      if (extra || extra === 0 || extra === '0') {
        onChange(extra, name, _changed);

      }
      else onChange(name, _changed);
    }
    ToastRoot.show('Lưu nội dung thành công');
  };

  const handleEditorChange = (content) => {
    setChanged(content);
  };

  const cleanHTML = (input) => {
    // 1. remove line breaks / Mso classes
    const stringStripper = /(\n|\r| class=(")?Mso[a-zA-Z]+(")?)/g;
    let output = input.replace(stringStripper, ' ');

    // 2. strip Word generated HTML comments
    const commentSripper = new RegExp('<!--(.*?)-->', 'g');
    output = output.replace(commentSripper, '');

    // 3. remove tags leave content if any
    const tagStripper = new RegExp(
      '<(/)*(title|meta|link|span|\\?xml:|st1:|o:|font)(.*?)>',
      'gi'
    );
    output = output.replace(tagStripper, '');

    // 4. Remove everything in between and including tags '<style(.)style(.)>'
    const badTags = [
      'style',
      'script',
      'applet',
      'embed',
      'noframes',
      'noscript',
    ];

    for (let i = 0; i < badTags.length; i++) {
      let tagStripper = new RegExp(
        '<' + badTags[i] + '.*?' + badTags[i] + '(.*?)>',
        'gi'
      );
      output = output.replace(tagStripper, '');
    }

    // A different attempt
    output = output.replace(/font-family:[^;]+;?|line-height:[^;]+;?/g, '');

    // 5. remove attributes ' style="..."'
    var badAttributes = ['start', 'align'];
    for (let i = 0; i < badAttributes.length; i++) {
      var attributeStripper = new RegExp(
        ' ' + badAttributes[i] + '="(.*?)"',
        'gi'
      );
      output = output.replace(attributeStripper, '');
    }

    return output;
  };

  const displayData = _changed || value || '';
  return (
    <div
      className={
        'my-2 flex-1 flex flex-col overflow-y-hidden ' + (className || '')
      }
      spellCheck="false"
    >
      <div className={'flex justify-between p-2 pl-4 bg-editcontent items-center ' + classNameEditor}>
        <p className="text-gray-700 font-semibold">{label}</p>
        <div className="flex ">
          {onCloseEit && <Button title='Close' onClick={onCloseEit} className='bg-gray-400 px-2 py-2 w-28 mr-2' >
            <span className='text-white font-normal'>Đóng</span>
          </Button>}

          <Button onClick={onsetShowpreview} className='bg-gray-600 px-2 py-2 w-28 mr-2'>
            <span className='text-white font-normal'>Xem trước</span>
          </Button>
          <Button onClick={() => onSave()} className='bg-save px-2 py-2  w-28'>
            <span className='text-white font-normal'>Lưu</span>
          </Button>
        </div>
        {/* {isEdit ? <Button disabled={!isEdit} onClick={closeEdit}>
          <MdArrowBack />
        </Button> : <Button
          onClick={toggleEdit} disabled={!!isEdit}>
          <FaEdit /> 
        </Button>} */}
      </div>

      {/* <Modal visible={q} title="Nội dung đã thay đổi , bạn có muốn lưu không" confirmText="Lưu thay đổi" cancelText="Để xem đã" onCancel={() => {
      toggleEdit();
      toggleQuestion();
      setChanged('');
    }} onAccept={onSave}>
    </Modal> */}
      {showView ? (
        <div className="preview_wrapper">
          <div className="container-preview relative">
            <div className="preview-overlay" onClick={onsetShowpreview} />
            <ContentViewer html={displayData} className="preview-content" />
          </div>
        </div>
      ) : null}

      <div className={classNameEditor}>
        <Editor
          id={id || 'tiny-react_14941107341631781321514'}
          apiKey="vrb2nacbahm2naunre9jlz3ygc3gl8eovn9da24vey5bi80l"
          initialValue={value ? value : '<div>Nội dung</div>'}
          init={{
            height: '100vh',
            file_picker_types: 'file image media',
            image_uploadtab: true,
            images_upload_handler: function (blobInfo, success, failure) {
              uploadFile(blobInfo.blob())
                .then((data) => {
                  if (data.message) {
                    ToastRoot.showError(data.message);
                    failure(data.message);
                  } else success(getRealImageUrl(data));
                })
                .catch((err) => {
                  ToastRoot.show(err);
                  failure(err);
                });
            },
            paste_data_images: true,
            // paste_word_valid_elements:
            //   'b,strong,i,em,h1,h2,u,p,ol,ul,li,a[href],span,color,font-size,font-color,font-family,mark,table,tr,td',
            // paste_retain_style_properties: 'all',
            paste_postprocess: function (plugin, args) {
              args.node.innerHTML = cleanHTML(args.node.innerHTML);
            },
            table_default_styles: {
              'border-collapsed': 'collapse',
              width: '100%',
            },
            branding: false,
            autoresize_bottom_margin: 50,
            // image_advtab: true,
            toolbar_mode: 'sliding',

            block_formats: 'Div=div;Paragraph=p;',
            // block_formats:'Div=div;Paragraph=p;Header 1=h1;Header 2=h2;Header 3=h3;Header 4=h4',
            fontsize_formats: '10px 12px 14px 18px 20px 24px',
            // table_responsive_width: true,
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author',
            formats: {
              removeformat: [
                {
                  selector:
                    'b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small',
                  remove: 'all',
                  split: true,
                  block_expand: true,
                  expand: false,
                  deep: true,
                },
                {
                  selector: 'span',
                  attributes: ['style', 'class'],
                  remove: 'empty',
                  split: true,
                  expand: false,
                  deep: true,
                },
                {
                  selector: '*',
                  attributes: ['style', 'class'],
                  split: false,
                  expand: false,
                  deep: true,
                },
              ],
            },
            plugins: [
              // 'advcode tinycomments',
              // 'autoresize',
              'code emoticons advlist autolink lists link image charmap print preview anchor tabfocus ',
              'searchreplace visualblocks code fullscreen',
              'table paste ',
              // 'powerpaste',
              'media table paste code help wordcount',
            ],
            toolbar:
              'preview| undo redo |code |image emoticons|fontsizeselect formatselect bold italic backcolor forecolor blockquote | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
          }}
          onEditorChange={handleEditorChange}
        />
      </div>
    </div>
  );
}
export default ContentEditor;
