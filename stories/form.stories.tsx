import * as React from "react";
import "../src/index.css";
import { storiesOf } from "@storybook/react"
import ColorForm from './components/colors/forms/ColorForm';
import "../src/constants/fontawesome";

storiesOf("Form", module)
.add("ColorForm", () => <ColorForm/>);