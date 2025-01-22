```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a closure over the previous value of 'count'
    const intervalId = setInterval(() => {
      setCount(count + 1); // This will always add 1 to the initial value of 0
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```