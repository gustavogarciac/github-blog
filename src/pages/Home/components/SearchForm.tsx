import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";

const searchInputSchema = z.object({
  query: z.string(),
});

type SearchInputType = z.infer<typeof searchInputSchema>;

interface SearchFormProps {
  postsLength: number;
  fetchPosts: (query?: string) => Promise<void>;
}

const SearchForm = ({ postsLength, fetchPosts }: SearchFormProps) => {
  const { control, handleSubmit } = useForm<SearchInputType>({
    resolver: zodResolver(searchInputSchema),
    defaultValues: {
      query: " ",
    },
  });

  function handleSearchContent(data: SearchInputType) {
    const { query } = data;
    fetchPosts(query);
  }
  return (
    <form className="mt-16" onSubmit={handleSubmit(handleSearchContent)}>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold leading-relaxed text-base-title">
          Posts
        </h1>
        <span className="text-base-text">
          {postsLength === 1 ? `${postsLength} post` : `${postsLength} posts`}
        </span>
      </div>

      <Controller
        control={control}
        name="query"
        render={({ field }) => {
          return (
            <input
              type="text"
              placeholder="Search content"
              className="mt-2 w-full rounded-md border border-base-border bg-base-input p-2 text-base-text placeholder-base-span/70"
              onChange={field.onChange}
              value={field.value}
            />
          );
        }}
      />
    </form>
  );
};

export default SearchForm;
