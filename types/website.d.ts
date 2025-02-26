interface ListingItem {
    id: number;
    title: string;
    type: string;
    price: number;
    rating: number;
    downloads: string;
    image: string;
    isPremium: boolean;
}

interface FilterOption {
    label: string;
    value: string;
}

interface WebsiteFiltersState {
    search: string;
    category: FilterOption;
    type: FilterOption;
    tech: FilterOption;
}

interface Website {
    id: string | number;
    title: string;
    category?: string;
    framework: string;
    price?: number;
    image?: string;
    url?: string;
    rating?: number;
    downloads?: number;
    description: string;
    features?: string[];
    screenshots: string[];
    longDescription: string;
    techStack: string[];
    lastUpdate: string;
    version: string;
    author: string;
    support: string;
    fileSize: string;
}

interface WebsiteGridProps {
    websiteData: Website[];
    onSelect: (website: any) => void;
}

interface WebsiteFiltersProps {
    filters: WebsiteFiltersState;
    onFilterChange: (filters: WebsiteFiltersState) => void;
}

interface ModalState {
    isVisible: boolean;
    type: string;
    website?: Website;
}

interface ViewDetailsModalProps {
    show: boolean;
    onClose: () => void;
    viewDetails?: Website;
}

interface PaginatorProps {
    pageData: {
        first: number;
        rows: number;
        totalRecords: number;
        rowsPerPageOptions?: number[];
    };
    onPageChange: (event: { first: number; rows: number }) => void;
    className?: string;
    maxVisibleButtons?: number;
}

interface WebsiteSelectionState {
    isVisible: boolean;
    type: 'view-details';
    website: Website;
}

interface WebsitesListProps {
    websiteData: Website[];
    onSelect: (state: WebsiteSelectionState) => void;
}

interface WebsiteCardProps {
    template: Website;
    onSelect: (state: WebsiteSelectionState) => void;
}

export {
    ListingItem,
    PaginatorProps,
    FilterOption,
    WebsiteFiltersState,
    Website,
    ModalState,
    WebsiteGridProps,
    WebsiteFiltersProps,
    ViewDetailsModalProps,
    WebsitesListProps,
    WebsiteSelectionState,
    WebsiteCardProps,
};
