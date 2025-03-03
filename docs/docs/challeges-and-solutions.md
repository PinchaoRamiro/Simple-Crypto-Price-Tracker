---
sidebar_position: 6
---

# Challenges and Solutions

## 1. API Integration

### Challenge:
Getting the results from the API was easy, but I had a problem with the performance of the application when I had to use another Hook to do the search, which was solved with the use of Reack Query and a little bit of logic that I applied when rendering the Lis component.

### Solution:

~~~javascript
  <CryptoList
    cryptos={search ? cryptosSearch : cryptos || []} // use cryptosSearch if search is not empty
    loading={isLoading || loadingSearch} 
  />
~~~

## 2. Button refresh 

### Challenge:

I had some complication with this button, as I didn't want the whole component to be rendered when pressed. 

### Solution

For this I used React Query, and also the implementation of some logic in the button to make it clearer, and a face message appears.

~~~javascript

  <button
    onClick={() => refetch()} 
    disabled={isFetching} 
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all flex items-center justify-center"
  >
    {isFetching ? (
      "Refreshing..."
    ) : (
      "Refresh"
    )}
  </button>



