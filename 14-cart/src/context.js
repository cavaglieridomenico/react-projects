  const [loading, setLoading] = useState(true);

const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(cartItems)

  return (
    <AppContext.Provider
      value={{
        cart,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
