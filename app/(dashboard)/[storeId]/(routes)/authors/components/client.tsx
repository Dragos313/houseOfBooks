"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ApiAlert } from "@/components/ui/api-alert";

import { columns, AuthorColumn } from "./columns";
import { ApiList } from "@/components/ui/api-list";

interface AuthorsClientProps {
  data: AuthorColumn[];
}

export const AuthorsClient: React.FC<AuthorsClientProps> = ({
  data
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Authors (${data.length})`} description="Manage authors for your store" />
        <Button onClick={() => router.push(`/${params.storeId}/authors/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API Calls for Authors" />
      <Separator />
      <ApiList entityName="authors" entityIdName="authorId" />
    </>
  );
};
