import { throttle } from 'lodash';
import { useState, useEffect, useCallback } from 'react';
import type { IBinanceTicker } from '../../@types/binance.types';

export const useBinanceTicker = () => {
  const [binanceTickers, setBinanceTickers] = useState<IBinanceTicker[] | null>(
    null,
  );
  const SOCKET_URL = `wss://stream.binance.com:9443/ws/!ticker@arr`;

  const updateBinanceTickers = useCallback(
    throttle((data: IBinanceTicker[]) => {
      const filteredData = data.filter((ticker) => ticker.s.endsWith('USDT'));
      setBinanceTickers(filteredData);
    }, 500),
    [],
  );

  useEffect(() => {
    const ws = new WebSocket(SOCKET_URL);

    ws.onmessage = (e) => {
      const data: IBinanceTicker[] = JSON.parse(e.data);
      updateBinanceTickers(data);
    };

    ws.onerror = (err) => {
      console.error('WebSocket Error', err);
    };

    return () => {
      ws.close();
      updateBinanceTickers.cancel();
    };
  }, [updateBinanceTickers]);

  return { binanceTickers };
};
