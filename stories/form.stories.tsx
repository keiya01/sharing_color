import * as React from "react";
import { storiesOf } from "@storybook/react"
import ColorForm from '../src/ColorForm';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';

library.add(faHashtag);

storiesOf("Form", module)
.add("ColorForm", () => <ColorForm/>);