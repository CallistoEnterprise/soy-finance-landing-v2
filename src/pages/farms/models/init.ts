import {$isStakeLPTokensDialogOpened, $isUnStakeLPTokensDialogOpened} from "./stores";
import {
  closeStakeLPTokensDialog,
  closeUnStakeLPTokensDialog,
  openStakeLPTokensDialog,
  openUnStakeLPTokensDialog
} from "./index";

$isStakeLPTokensDialogOpened.on(
  openStakeLPTokensDialog,
  () => {
    return true;
  }
)

$isStakeLPTokensDialogOpened.on(
  closeStakeLPTokensDialog,
  () => {
    return false;
  }
)

$isUnStakeLPTokensDialogOpened.on(
  openUnStakeLPTokensDialog,
  () => {
    return true;
  }
)

$isUnStakeLPTokensDialogOpened.on(
  closeUnStakeLPTokensDialog,
  () => {
    return false;
  }
)
