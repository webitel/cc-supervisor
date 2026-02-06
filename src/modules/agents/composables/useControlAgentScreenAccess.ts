import { SpecialGlobalAction } from "@webitel/ui-sdk/modules/Userinfo";
import { computed } from "vue";

import { useUserinfoStore } from "../../userinfo/store/userInfoStore";

export const useControlAgentScreenAccess = () => {
  const {
    hasSpecialGlobalActionAccess,
  } = useUserinfoStore();

  const isControlAgentScreenAllow = computed(() => {
    return hasSpecialGlobalActionAccess(SpecialGlobalAction.ControlAgentScreen);
  });

  return {
    isControlAgentScreenAllow,
  };
};