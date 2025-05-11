// Тернарный оператор ? - если condition есть - получаем булевое значение true, иначе false
// Condition ? true : false;

// SomeType extends OtherType ? TrueType : FalseType

const str: string = "Hello";
// string =x Hello
type Example = "string" extends "Hello" ? string : number; // Вывод: false

// Generic Type
type FromUserOrFromBase<T extends string | number> = T extends string
    ? IDataFromUser
    : IDataFromBase;

// Интерфейсы
interface User<T extends "created" | Date> {
    created: T extends "created" ? "created" : Date;
}

const user: User<"created"> = {
    created: "created",
};

interface IDataFromUser {
    weight: string;
}

interface IDataFromBase {
    calories: number;
}

// function calculateDailyCalories(str: string): IDataFromUser {}

// function calculateDailyCalories(num: string): IDataFromUser {}

// Функция для рассчета дневных каллорий
function calculateDailyCalories<T extends string | number>(
    numOrStr: T
): T extends string ? IDataFromUser : IDataFromBase {
    if (typeof numOrStr === "string") {
        const obj: IDataFromUser = {
            weight: numOrStr,
        };
        return obj as FromUserOrFromBase<T>; // Возвращаем результат generic типа
    } else {
        const obj: IDataFromBase = {
            calories: numOrStr,
        };
        return obj as FromUserOrFromBase<T>; // Возвращаем результат generic типа
    }
}

// Generic тип
type GetStringType<T extends "hello" | "world" | string> = T extends "hello"
    ? "hello"
    : T extends "world"
    ? "world"
    : string;

// Ключевое слово infer
type GetFirstType<T> = T extends Array<infer First> ? First : T; // Возвращаем первым элемент массив или возвращаем тип T

type Ex = GetFirstType<number[]>;

type ToArray<Type> = Type extends any ? Type[] : never;

type ExArray = ToArray<Ex | string>;
