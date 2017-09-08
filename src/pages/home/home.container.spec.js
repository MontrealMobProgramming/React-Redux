import {HomeComponent} from './home.container';
import React from 'react';
import { shallow } from 'enzyme';

describe('Home container', () => {


  const user = {
    name : 'World'
  };
  let component;

  beforeEach(() => {
    component = shallow(<HomeComponent user={user} />);
  });

  it('will be defined', () => {
    expect(HomeComponent).toBeDefined();
  });

  it('will render', () => {
    expect(component.find('.home').exists()).toBeTruthy();
  });

  it('will render render Hello World', () => {
    expect(component.find('h1').text()).toEqual('Hello World!');
  });
});
