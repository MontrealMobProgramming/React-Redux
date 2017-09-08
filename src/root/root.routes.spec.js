import {shallow} from 'enzyme';
import React from 'react';
import {Route} from 'react-router';
import Main from '../templates/main/main.component';

import Routes from './root.routes';

describe('Root routes', () => {
  const Test = () => {
    return (
      <div>
        { Routes }
      </div>
    );
  };

  const wrapper = shallow(<Test />);

  let pathMapRoutes = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  it('will define the "/" route',() => {
    expect(pathMapRoutes['/']).toBe(Main);
  });

});
