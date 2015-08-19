
import assert from 'assert-element';
import { Cell } from '..';

describe('Cell', function () {
  it('should return a div with the cell class', function () {
    let props = {};
    let node = Cell.render({ props });
    assert.isNode(node, 'div');
    assert.hasAttribute(node, 'class', 'Grid-cell');
  });

  it('should add the center align class', function () {
    let props = { center: true };
    let node = Cell.render({ props });
    assert.hasClass(node, 'Grid-cell--center');
  });

  it('should add the correct size class', function () {
    let props = { size: '1of2' };
    let node = Cell.render({ props });
    assert.hasClass(node, 'u-size1of2');
  });

  it('should add the fit class', function () {
    let props = { size: 'fit' };
    let node = Cell.render({ props });
    assert.hasClass(node, 'u-sizeFit');
  });

  it('should add the alt fit class', function () {
    let props = { size: 'fit-alt' };
    let node = Cell.render({ props });
    assert.hasClass(node, 'u-sizeFitAlt');
  });

  it('should add the fill class', function () {
    let props = { size: 'fill' };
    let node = Cell.render({ props });
    assert.hasClass(node, 'u-sizeFill');
  });

  it('should add the alt fill class', function () {
    let props = { size: 'fill-alt' };
    let node = Cell.render({ props });
    assert.hasClass(node, 'u-sizeFillAlt');
  });

  it('should add the full class', function () {
    let props = { size: 'full' };
    let node = Cell.render({ props });
    assert.hasClass(node, 'u-sizeFull');
  });

  it('should include the children', function () {
    let children = [ 'Hello World' ];
    let props = { children };
    let node = Cell.render({ props });
    assert.hasChildren(node, children);
  });
});
