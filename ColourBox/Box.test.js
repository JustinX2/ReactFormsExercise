import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Box from './Box';

it('renders without crashing', ()=>{
    render(<Box />);
});

it('matches snapshot', ()=>{
    const { asFragment }=render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});

it('removes box', ()=>{
    const removeBox=jest.fn();
    const { getByText }=render(<Box id="1" width="100" height="100" backgroundColor="blue" removeBox={removeBox} />);
    const removeButton=getByText('X');
    fireEvent.click(removeButton);
    expect(removeBox).toHaveBeenCalled();
    expect(removeBox).toHaveBeenCalledWith('1');
});