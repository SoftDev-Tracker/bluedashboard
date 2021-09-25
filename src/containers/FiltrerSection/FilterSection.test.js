import React, { Component } from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import FiltrerSection from '.'

test('Render test', ()=>{
    const component = render(<FiltrerSection/>)
    component.getByText('Show only active elements')

});