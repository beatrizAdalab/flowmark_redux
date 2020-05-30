import React from 'react';
import { shallow } from 'enzyme';
import CardClassified from './CardClassified';

describe('CardClassified', () => {
  const props = {
    classified: {
      tags: ["lifestyle", "work", "mobile"],
      _id: "5e43096e99660405061db854",
      name: "Primero 4",
      price: 10000,
      description: "cambio",
      type: "sell",
      photo: "https://pbs.twimg.com/media/Dpu128FWwAI_Bru?format=jpg",
      createdAt: "2020-02-11T20:07:10.232Z",
      updatedAt: "2020-05-28T14:46:59.662Z",
      __v: 15
    }
  };
  let wrapper;

  test('snapshot testing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  beforeEach(() => {
    wrapper = shallow(<CardClassified {...props} />);
  });

  test('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should have a photo in component ReactImageFallback', () => {
    expect(wrapper.find('ReactImageFallback').props().src).toBe(props.classified.photo)
  });

});