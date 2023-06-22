import React, {useCallback} from "react";
import styles from "./StakeLPTokensModal.module.scss";
import {useEvent, useStore} from "effector-react";
import {closeStakeLPTokensDialog} from "../../models";
import Dialog from "../../../../components/molecules/Dialog";
import {$isStakeLPTokensDialogOpened} from "../../models/stores";
import DialogHeader from "../../../../components/molecules/DialogHeader";
import TokenSelector from "../../../../components/organisms/TokenSelector";
import Button from "../../../../components/atoms/Button";

export default function StakeLPTokensModal() {
  const isOpened = useStore($isStakeLPTokensDialogOpened);
  const closeStakeLPTokensDialogFn = useEvent(closeStakeLPTokensDialog);

  const handleClose = useCallback(() => {
    closeStakeLPTokensDialogFn();
  }, [closeStakeLPTokensDialogFn])

  return <Dialog isOpen={isOpened} onClose={handleClose}>
    <div className={styles.stakeLpTokensModal}>
      <DialogHeader handleClose={handleClose} title="Stake lp tokens" />
      <div className={styles.content}>
        <TokenSelector
          setDialogOpened={null}
          isDialogOpened={null}
          pickedToken={null}
          inputValue={null}
          handleInputChange={null}
          handleTokenChange={null}
          label="Stake"
          balance={null} />
        <div className={styles.buttons}>
          <Button onClick={handleClose} fullWidth variant="outlined">Cancel</Button>
          <Button fullWidth>Stake</Button>
        </div>
      </div>
    </div>
  </Dialog>;
}
