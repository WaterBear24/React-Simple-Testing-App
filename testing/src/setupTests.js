// This file is ran before any tests
// Jest looks for this file name in the src folder

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
