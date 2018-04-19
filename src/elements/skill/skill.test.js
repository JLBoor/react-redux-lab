import React from 'react';
import ReactDOM from 'react-dom';
import SkillComponent from './skill.component';
import renderer from 'react-test-renderer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SkillComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render a green label for the web category', () => {
    const component = renderer.create(<SkillComponent category="web"></SkillComponent>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render an orange label for the microservices category', () => {
    const component = renderer.create(<SkillComponent category="microservices"></SkillComponent>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render a red label for the devops category', () => {
    const component = renderer.create(<SkillComponent category="devops"></SkillComponent>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render a navy label for the bigdata category', () => {
    const component = renderer.create(<SkillComponent category="bigdata"></SkillComponent>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
