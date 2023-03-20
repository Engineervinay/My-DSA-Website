const topics=[
    {
        id:1,
        name:"Learn the basics",
    },
    {
        id:2,
        name:"Learn Important Sorting Techniques"
    },
    {
        id:3,
        name:"Arrays Easy-medium-hard"
    },
    {
        id:4,
        name:"Binary search"
    },
    {
        id:5,
        name:"Strings [basic and mid]"
    },
    {
        id:6,
        name:"LinkedList"
    },
    {
        id:7,
        name:"Recursion"
    },
    {
        id:8,
        name:"Bit Manipulation"
    },
    {
        id:9,
        name:"Stack and Queues"
    },
    {
        id:10,
        name:"Sliding Window  & 2 pointer"
    },
    {
        id:11,
        name:"Heaps"
    },
    {
        id:12,
        name:"Greedy Algorithms"
    },
    {
        id:13,
        name:"Binary Trees"
    },
    {
        id:14,
        name:"Binary search Trees"
    },
    {
        id:15,
        name:"Graphs"
    },
    {
        id:16,
        name:"Dynamic Programming"
    },
    {
        id:17,
        name:"Tries"
    },
    {
        id:18,
        name:"Strings Hard"
    },
]

let problems=[
    {
        name:"Pattern 1",
        topicRefid:1,
        gfg:"https://practice.geeksforgeeks.org/problems/square-pattern/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=pattern_1",
        leetcode:"",
        article:"https://takeuforward.org/pattern/pattern-1-rectangular-star-pattern/",
        youtube:"https://youtu.be/tNm_NNSB3_w?t=91",
        code: `
        void printSquare(int n) {
            // code here
            for(int i=0;i<n;i++){
                for(int j=0;j<n;j++){
                    cout<<"* ";
                }
                cout<<endl;
            }
        }
      `,
    },
    {
        name:"Selection Sort",
        topicRefid:2,
        gfg:"https://bit.ly/3ppA6YJ",
        leetcode:"",
        article:"https://takeuforward.org/sorting/selection-sort-algorithm/",
        youtube:"https://youtu.be/HGk_ypEuS24?t=166",
        code: `
        int select(int arr[], int i)
    {
        // code here such that selectionSort() sorts arr[]
        selectionSort(arr,i);
    }
     
    void selectionSort(int arr[], int n)
    {
       //code here
       //selection sort
       for(int i=0;i<n-1;i++){
           for(int j=i+1;j<n;j++){
               if(arr[i]>arr[j]){
                    arr[i]=arr[i]+arr[j];
                    arr[j]=arr[i]-arr[j];
                    arr[i]=arr[i]-arr[j];
               }
           }
       }
    }
      `,
    },
]
function getLength(){
    return (
        problems.length
    )
}
export {problems,topics,getLength};