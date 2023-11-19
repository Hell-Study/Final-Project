import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { exchangeRateState } from 'recoil/atoms/exchangeAtoms';

interface IExchangeRate {
  value: number;
}

export const useFetchExchangeRate = () => {
  const [exchangeRate, setExchangeRate] = useRecoilState(exchangeRateState);
  const eventSource = useRef<EventSource | null>(null);

  const SSE_URL = process.env.REACT_APP_FX_IDC_API_URL;

  useEffect(() => {
    if (SSE_URL) {
      eventSource.current = new EventSource(SSE_URL);

      eventSource.current.onmessage = (event) => {
        const json: IExchangeRate = JSON.parse(event.data);

        if (json.value) {
          const rate = json.value;
          setExchangeRate(rate);
        }
      };

      eventSource.current.onerror = (err) => {
        console.error('Server-Sent Events Error:', err);
        eventSource.current?.close();
      };
    }

    return () => {
      eventSource.current?.close();
    };
  }, []);

  return { exchangeRate };
};
