import ImageViewer from 'lib/Image/ImageViewer';

export function CellImageRender({value}) {
  return <ImageViewer src={value} />;
}
export function CellImageAppRender({value}) {
  return <ImageViewer src={value} width={120} height={40} />;
}
export function CellAvatarRender({value}) {
  return <ImageViewer src={value} width={40} height={40} className="h-10 w-10" />;
}
