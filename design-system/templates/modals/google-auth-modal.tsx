import { AlertDialogue, AlertDialogueAction, AlertDialogueCancel, AlertDialogueContent, AlertDialogueDescription, AlertDialogueOverlay, AlertDialogueTitle, AlertDialogueTrigger } from '@design-system/components/data-display/alert-dialogue';
import React from 'react'

interface IProps {
  isopen: boolean;
  setisopen: (value: boolean)=> void;
}

const GoogleAuthModal = (props: IProps) => {
  return (
    <AlertDialogue isopen={props.isopen} setisopen={props.setisopen}>
      <AlertDialogueTrigger classstyle="!text-red-500">ddfdf</AlertDialogueTrigger>
      <AlertDialogueOverlay isopen={props.isopen}>
        <AlertDialogueContent>
          <AlertDialogueTitle>ddfvd</AlertDialogueTitle>
          <AlertDialogueDescription>dvfdfvfd</AlertDialogueDescription>
          <AlertDialogueCancel>vdfvfdv</AlertDialogueCancel>
          <AlertDialogueAction>dvfdvdfv</AlertDialogueAction>
        </AlertDialogueContent>
      </AlertDialogueOverlay>
    </AlertDialogue>
  );
};

export default GoogleAuthModal