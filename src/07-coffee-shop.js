/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  if (size !== 'small' &&  size !=='medium' &&  size !== 'large'){
    return -1;
  }
  if(type !== 'regular' && type !== 'latte' && type !== 'cappuccino' && type !== 'mocha'){
    return -1;
  }
  let x=0;
 switch(size){
  case 'small':
   x += 3;
   break;

  case 'medium':
    x +=4;
    break;

  case 'large':
    x += 5;
    break;

 }
if(type == 'latte'){
  x +=1.00;
}
else if ( type =='cappuccino'){
  x +=1.50
}
else if(type == 'mocha'){
  x +=2.00;
}

if(extras.whippedCream) x+=0.50
if (extras.extraShot) x+=0.75
  
return x;
}
