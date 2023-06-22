import React, {useCallback} from "react";
import styles from "./StakeLPTokensModal.module.scss";
import {useEvent, useStore} from "effector-react";
import {closeUnStakeLPTokensDialog} from "../../models";
import Dialog from "../../../../components/molecules/Dialog";
import {$isUnStakeLPTokensDialogOpened} from "../../models/stores";
import DialogHeader from "../../../../components/molecules/DialogHeader";

export default function UnStakeLPTokensModal() {
  const isOpened = useStore($isUnStakeLPTokensDialogOpened);
  const closeUnStakeLPTokensDialogFn = useEvent(closeUnStakeLPTokensDialog);

  const handleClose = useCallback(() => {
    closeUnStakeLPTokensDialogFn();
  }, [closeUnStakeLPTokensDialogFn])

  return <Dialog isOpen={isOpened} onClose={handleClose}>
    <DialogHeader handleClose={handleClose} title="Unstake lp tokens" />
  </Dialog>;
}
