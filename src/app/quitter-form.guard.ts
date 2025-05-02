import { CanDeactivateFn } from '@angular/router';

export const quitterFormGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
    if(!component['submitted']) {
        if(confirm("Etes vous sur de ne pas soumettre le formulaire ?"))
            return true;
        return false;
    }
  return true;
};
