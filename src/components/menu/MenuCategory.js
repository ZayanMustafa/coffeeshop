

// File path: src/components/menu/MenuCategory.js
import { MENU_DATA } from '@/constant/Home/Menu';
import { MenuCard } from './MenuCard';

export const MenuCategory = ({ category }) => {
  return (
    <>
      <div className="mb-8">
        <h2 
          className="text-2xl md:text-3xl font-bold mb-2"
          style={{ color: MENU_DATA.theme.colors.primary }}
        >
          {category.name}
        </h2>
        <p 
          className="text-[#6F4E37]"
          style={{ fontFamily: MENU_DATA.theme.fonts.body }}
        >
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.items.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>

      </>
  );
};

