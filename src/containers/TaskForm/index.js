import React,{useContext} from 'react'
import { COL50, FormGroup, InputText, LiRadio, RadioButtonToggle, TextArea, UlRadio } from '../../components/Form'
import { Form, FormContainer, Modal, FormHeader } from '../../components/Form/ModalForm'
import { ModalContext } from '../../context/ModalContext'
import { Label } from '../../components/Form/'

const TaskForms = () => {

    const useModal();

    const {show, handleClose} = useContext(ModalContext)


    return (
            <>
                {
                (show) ? (
                    <Modal>
                        <FormContainer>
                            <Form>
                                <FormHeader title="Create new taks" handleClose={handleClose}/>
                                <div style={ {'display':'flex'}}>
                                    <COL50>
                                        <FormGroup>
                                            <Label>Name</Label>
                                            <InputText type="text"/>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Description</Label>
                                            <TextArea />
                                        </FormGroup>
                                    </COL50>
                                    <COL50>
                                        <FormGroup>
                                            <Label>Priority</Label>
                                            <UlRadio>
                                                <LiRadio>
                                                    <RadioButtonToggle name="priority" type="radio" checked/>
                                                    Radio 
                                                </LiRadio>
                                                <LiRadio>
                                                    <RadioButtonToggle name="priority" type="radio"/>
                                                    Radio 
                                                </LiRadio>
                                            </UlRadio>
                                        </FormGroup>
                                    </COL50>
                                </div>
                            </Form>
                        </FormContainer>
                    </Modal>
                ) : ''
                }
            </>
    )
}

export default TaskForms
