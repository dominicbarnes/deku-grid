/* eslint-disable quote-props */

/** @jsx dom */

import dom from 'magic-virtual-element';


export function render({ props }) {
  let classes = {
    'Grid-cell': true,
    'Grid-cell--center': !!props.center,
    [`u-size${props.size}`]: (/^\d+of\d+$/).test(props.size),
    'u-sizeFit': props.size === 'fit',
    'u-sizeFitAlt': props.size === 'fit-alt',
    'u-sizeFill': props.size === 'fill',
    'u-sizeFillAlt': props.size === 'fill-alt',
    'u-sizeFull': props.size === 'full'
  };

  return <div class={classes}>{props.children}</div>;
}
