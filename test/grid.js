
import assert from 'virtual-element-assertions';
import { Grid } from '..';

describe('Grid', function () {
  it('should return a div with the grid class', function () {
    let props = {};
    let node = Grid.render({ props });
    assert.isNode(node, 'div');
    assert.hasAttribute(node, 'class', 'Grid');
  });

  it('should add the gutter class', function () {
    let props = { gutter: true };
    let node = Grid.render({ props });
    assert.hasClass(node, 'Grid--withGutter');
  });

  it('should add the center align class', function () {
    let props = { center: true };
    let node = Grid.render({ props });
    assert.hasClass(node, 'Grid--alignCenter');
  });

  it('should add the right align class', function () {
    let props = { right: true };
    let node = Grid.render({ props });
    assert.hasClass(node, 'Grid--alignRight');
  });

  it('should add the middle align class', function () {
    let props = { middle: true };
    let node = Grid.render({ props });
    assert.hasClass(node, 'Grid--alignMiddle');
  });

  it('should add the bottom align class', function () {
    let props = { bottom: true };
    let node = Grid.render({ props });
    assert.hasClass(node, 'Grid--alignBottom');
  });

  it('should include the children', function () {
    let children = [ 'Hello World' ];
    let props = { children };
    let node = Grid.render({ props });
    assert.hasChildren(node, children);
  });
});
