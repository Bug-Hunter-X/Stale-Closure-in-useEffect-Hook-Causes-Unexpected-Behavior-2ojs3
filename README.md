# Stale Closure in useEffect Hook
This repository demonstrates a common error in React applications involving stale closures within the `useEffect` hook.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides the corrected version.

## Problem
The issue arises when a functional component uses `useEffect` to set an interval. If the callback function within `setInterval` references a state variable using a closure, it will always refer to the initial value of that variable and not the updated value. This leads to unexpected or incorrect behavior.

## Solution
The solution lies in using the functional update form of `setState`. This ensures that the latest value of the state is used in each interval iteration.  This approach avoids the stale closure problem and ensures the correct state value is always used in the interval callback.