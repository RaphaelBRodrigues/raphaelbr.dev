import themeConfig from '@Styles/themeConfig';
import { fireEvent } from '@testing-library/react';
import renderWithProviders from '@Utils/renderWithProviders';
import React from 'react';
import MenuMobile from './index';

describe.skip('Testing Header Component', () => {
  it('should have the .init() item selected', () => {
    const { getByTestId } = renderWithProviders(<MenuMobile />);

    const $menuItem = getByTestId('initial');

    expect($menuItem).toHaveStyle({ color: themeConfig.colors.red });
  });

  it('should have the .about() item selected', () => {
    const { getByTestId } = renderWithProviders(<MenuMobile />);

    const $intialItem = getByTestId('initial');
    const $aboutItem = getByTestId('about');

    fireEvent.click($aboutItem);

    expect($intialItem).toHaveStyle({ color: themeConfig.colors.white });

    expect($aboutItem).toHaveStyle({ color: themeConfig.colors.red });
  });

  it("shouldn't change the menu if the .skills or .contact are clicked", () => {
    const { getByTestId } = renderWithProviders(<MenuMobile />);

    const unselectedStyle = { color: themeConfig.colors.white };

    const selectedStyle = { color: themeConfig.colors.red };

    const $initialItem = getByTestId('initial');
    const $aboutItem = getByTestId('about');
    const $skillsItem = getByTestId('skills');
    const $contactItem = getByTestId('contact');

    expect($initialItem).toHaveStyle(selectedStyle);
    expect($aboutItem).toHaveStyle(unselectedStyle);
    expect($skillsItem).toHaveStyle(unselectedStyle);
    expect($contactItem).toHaveStyle(unselectedStyle);

    fireEvent.click($skillsItem);

    expect($initialItem).toHaveStyle(selectedStyle);
    expect($aboutItem).toHaveStyle(unselectedStyle);
    expect($skillsItem).toHaveStyle(unselectedStyle);
    expect($contactItem).toHaveStyle(unselectedStyle);

    fireEvent.click($contactItem);

    expect($initialItem).toHaveStyle(selectedStyle);
    expect($aboutItem).toHaveStyle(unselectedStyle);
    expect($skillsItem).toHaveStyle(unselectedStyle);
    expect($contactItem).toHaveStyle(unselectedStyle);

    fireEvent.click($aboutItem);

    expect($initialItem).toHaveStyle(unselectedStyle);
    expect($aboutItem).toHaveStyle(selectedStyle);
    expect($skillsItem).toHaveStyle(unselectedStyle);
    expect($contactItem).toHaveStyle(unselectedStyle);
  });
});
