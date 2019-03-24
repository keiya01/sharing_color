import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ColorListItem, { ColorProps } from '../src/ColorListItem';

const colorItemProps: ColorProps = {
    color: "red",
    body: "test"
}

storiesOf('Item', module)
    .add('ColorListItem', () => (
        <ColorListItem {...colorItemProps} />
    ));