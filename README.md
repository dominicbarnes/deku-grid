# deku-grid

> Deku components for a grid based on suitcss/components-grid

## Usage

```js

import { Grid, Cell } from 'dominicbarnes/deku-grid';


export function render({ props }) {
  return (
    <Grid gutter>
      <Cell size="1of3">Nav</Cell>
      <Cell size="2of3">Main</Cell>
    </Grid>
  );
}

```

## Dependencies

This automatically includes [suitcss/components-grid](https://github.com/suitcss/components-grid)
and [suitcss/utils-size](https://github.com/suitcss/utils-size).


## Grid

This is the main container for your grid, includes the `Grid` class only by default.

### Attributes

#### gutter

When this boolean flag is set, the `Grid--withGutter` class will be added.

#### center

When this boolean flag is set, the `Grid--alignCenter` class will be added.

#### right

When this boolean flag is set, the `Grid--alignRight` class will be added.

#### middle

When this boolean flag is set, the `Grid--alignMiddle` class will be added.

#### bottom

When this boolean flag is set, the `Grid--alignBottom` class will be added.

## Cell

This is the main container each of for your grid cells, includes the `Grid-cell` class only by default.

### Attributes

#### size

This is a **required** attribute, as excluding it makes little sense. (however, it won't throw an error)
It can be any of the following values:

 - `fit`
 - `fit-alt`
 - `fill`
 - `fill-alt`
 - `full`
 - `{X}of{Y}` (eg: "1of2", "2of3", "5of6")

#### center

When this boolean flag is set, the `Grid-cell--center` class will be added.
