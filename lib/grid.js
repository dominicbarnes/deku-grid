
/** @jsx dom */

import dom from 'magic-virtual-element';


export function render({ props }) {
  let classes = {
    'Grid': true,
    'Grid--withGutter': !!props.gutter,
    'Grid--alignCenter': !!props.center,
    'Grid--alignRight': !!props.right,
    'Grid--alignMiddle': !!props.middle,
    'Grid--alignBottom': !!props.bottom
  };

  return <div class={classes}>{props.children}</div>;
}
