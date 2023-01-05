import { ref } from "vue";

export default function () {
    const posts = ref([]);
    const error = ref(null);

    // setup cannot run async, use other function async await to call Data
    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posadsadasdts"
            );
            if (!response.ok) throw Error("Something went wrong");
            posts.value = await response.json();
        } catch (e) {
            error.value = e;
            console.log(error);
        }
    };
    fetchData();
    return { posts, error, fetchData };
}
