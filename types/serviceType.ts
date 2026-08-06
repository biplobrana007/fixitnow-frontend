export type ServiceType = {
  id: string;
  title: string;
  description: string;
  price: string;
  isAvailable: boolean;
  duration: number;
  technicianId: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
  technician: {
    technicianProfile: { location: string };
    technicianReviews: [
      {
        rating: number;
        comment: string;
        customer: {
          name: string;
          profilePhoto: string;
        };
      }
    ];
  };
  category: {
    categoryName: string;
  };
  averageRating: number;
};

export type ServiceDetailsType = {
  service: {
    id: string;
    title: string;
    description: string;
    price: string;
    isAvailable: boolean;
    duration: number;
    technicianId: string;
    categoryId: string;
    createdAt: string;
    updatedAt: string;
    technician: {
      technicianReviews: [
        {
          rating: number;
          comment: string;
          customer: {
            name: string;
            profilePhoto: string;
          };
        }
      ];
      name: string;
      email: string;
    };
    category: {
      categoryName: string;
    };
  };
  averageRating: number;
};
