//react-test-renderer
import React from "react";
import DashBoardPage from "../../component/DashBoardPage";
import { shallow } from "enzyme";
import "../setupTests";


test('should render ExpenseDashBoardPage correctly', () => {
    const wrapper = shallow(<DashBoardPage />);
    expect(wrapper).toMatchSnapshot();
})