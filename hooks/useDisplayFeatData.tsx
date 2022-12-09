import React, { ReactNode, useCallback, useState } from 'react'

export const useDisplayFeatData = (value?: ReactNode): [ReactNode, any] => {
  const [featData, setFeatData] = useState<ReactNode>(value);

  const setData = useCallback(
    (): void => setFeatData((featData) => featData),
    []
  );
  return [featData, setData];
}