import * as React from "react";
import "../src/index.css";
import { storiesOf } from "@storybook/react"
import ColorForm from '../src/ColorForm';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHashtag, faPalette } from '@fortawesome/free-solid-svg-icons';

library.add(faHashtag, faPalette);

storiesOf("Form", module)
.add("ColorForm", () => <ColorForm/>);