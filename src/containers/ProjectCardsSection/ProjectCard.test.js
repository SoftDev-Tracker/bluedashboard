import {render} from '@testing-library/react'
import React from 'react'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'


import '@testing-library/jest-dom'

import { CardElement } from './Index'

test('Renders card component', ()=>{
    const history = createMemoryHistory()

    const component = render(
        <Router history={history}>
            <CardElement title="Hello!" description="World!" />
        </Router>)

        component.getByText("Hello!")
})

