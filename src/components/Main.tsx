import FoodCards from "./FoodCards";

export default function Principal() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl pt-8"> Petiscos </h1>
            <div className="px-64 grid grid-cols-4 gap-4 pt-8">

                <FoodCards />
                <FoodCards />
                <FoodCards />
                <FoodCards />
                <FoodCards />
                <FoodCards />

            </div>

        </div>
    )
}