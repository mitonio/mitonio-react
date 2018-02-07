import React from 'react';
import { mount } from 'enzyme';

import MapContainer from '../index';

describe('<MapContainer />', () => {
    it('should render the map container correctly', () => {
        const renderedComponent = mount(<MapContainer />);
        expect(renderedComponent).toBeTruthy();
    });
});
