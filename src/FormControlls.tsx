import { memo, useRef } from 'react';
import cn from './Test.module.scss';

export const AddColumn = memo(({ onUpdate }: { onUpdate: (name: string, cost: number) => void }) => {
  const newColumnName = useRef<HTMLInputElement>(null);
  const newColumnCost = useRef<HTMLInputElement>(null);

  return (
    <section className={cn.formContainer}>
      <span>Добавить позицию чека</span>
      <label>
        Название позиции
        <input ref={newColumnName} />
      </label>
      <label>
        Цена
        <input ref={newColumnCost} type={'number'} />
      </label>
      <button
        type={'submit'}
        onClick={() => {
          if (!newColumnName.current?.value || !newColumnCost.current?.value) {
            return;
          }
          onUpdate(newColumnName.current.value, Number(newColumnCost.current.value));
          newColumnName.current.value = '';
          newColumnCost.current.value = '';
        }}
      >
        Добавить
      </button>
    </section>
  );
});

export const AddRow = memo(({ onUpdate }: { onUpdate: (name: string) => void }) => {
  const newRowName = useRef<HTMLInputElement>(null);

  return (
    <section className={cn.formContainer}>
      <span>Добавить участника</span>
      <label>
        Имя
        <input ref={newRowName} />
      </label>
      <label />
      <button
        type={'submit'}
        onClick={() => {
          if (!newRowName.current?.value) {
            return;
          }
          onUpdate(newRowName.current.value);
          newRowName.current.value = '';
        }}
      >
        Добавить
      </button>
    </section>
  );
});
