// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import until from 'enzyme-shallow-until';
import ShallowWrapper from 'enzyme/ShallowWrapper';

configure({adapter: new Adapter()});
ShallowWrapper.prototype.until = until;
