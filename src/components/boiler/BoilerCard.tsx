import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { BoilerModel } from "@/data/boilers";

interface BoilerCardProps {
  id: string;
  brand: string;
  description: string;
  img: string;
  models: BoilerModel[];
}

export const BoilerCard = ({
  id,
  brand,
  description,
  img,
  models,
}: BoilerCardProps) => {
  const firstModel = models[0];

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-square">
        <img
          src={img}
          alt={brand}
          className="w-full h-full object-cover p-4"
        />
      </div>
      <CardHeader className="flex-1">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-lg font-semibold">{brand}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-muted-foreground">Мощность:</p>
              <p className="font-medium">{firstModel.power}</p>
            </div>
            <div>
              <p className="text-muted-foreground">КПД:</p>
              <p className="font-medium">{firstModel.efficiency}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Button asChild className="w-full">
              <Link to={`/catalog/${id}/${firstModel.id}`}>
                Подробнее
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
