import React,{useContext} from 'react'
import { Form, FormContainer, Modal, FormHeader } from '../../components/Form/ModalForm'
import { ModalContext } from '../../context/ModalContext'

const TaskForms = () => {

    const {show, handleClose} = useContext(ModalContext)

    return (
            <>
                {
                    (show) ? (
                        <Modal onClick={()=>{handleClose()}}>
                            <FormContainer>
                                <Form>
                                    <FormHeader title="Create new taks" handleClose={handleClose}/>
                                </Form>
                            </FormContainer>
                        </Modal>
                    ) : ''
                }
            </>
    )
}

export default TaskForms
