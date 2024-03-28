
const categoryData = [
    {
      categoryName: 'Sandwitches',
      subCategory: ['Veg', 'Non veg']
    },
    {
      categoryName: 'Beverages',
      subCategory: ['Hot', 'Cold', 'Smoothie']
    },
    {
      categoryName: 'Pasta',
      subCategory: null
    },

    {
      categoryName: 'Cakes',
      subCategory: ['Mousse Cake', 'Naked Cake', 'Wedding Cake']
    },
    {
      categoryName: 'Gelato',
      subCategory: ['Hot', 'Cold', 'Smoothie']
    }
  ];

  const TestCascade = () => {

    return (
        <div>
        <InputTextContainer>
          <InputLabel>Category</InputLabel>
          <InputSelect
            value={category}
            name="category"
            onChange={onChange('category')}
          >
            {categoryData.map((category, index) => {
              return <InputOption>{category.categoryName}</InputOption>;
            })}
          </InputSelect>
        </InputTextContainer>

        {
          <InputTextContainer>
            <InputLabel>Sub Category</InputLabel>
            <InputSelect
              value={subCategory}
              name="subCategory"
              onChange={onChange('subCategory')}
            >
              {categoryData
                .filter(selectedCategory => {
                  return selectedCategory.categoryName === category;
                })
                .map((category, index) =>
                  category.subCategory.map(subcategory => {
                    {
                      return <InputOption>{subcategory}</InputOption>;
                    }
                  })
                )}
            </InputSelect>
          </InputTextContainer>
        }
        </div>
    )
  }

  export default TestCascade;