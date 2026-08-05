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
