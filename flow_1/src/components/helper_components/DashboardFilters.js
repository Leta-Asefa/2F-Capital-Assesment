const DashboardFilters = () => {

    const images = ['search.svg', 'list-filter.svg', 'verticallines.svg', 'list.svg', 'adjust.svg']

    
    return ( 
           
            <div className="flex items-center justify-end  pt-10  gap-3">
                {
                    images.map(image => {
                        return <img src={image} className="w-5 h-5" />
                    })
                }
            </div>
     );
}
 
export default DashboardFilters;